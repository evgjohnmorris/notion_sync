/**
 * Generated Tool: usersTool_0020
 * Domain: Users
 * ID: 0020
 */
exports.usersTool_0020 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0020:', error);
    throw error;
  }
};
