/**
 * Generated Tool: usersTool_0019
 * Domain: Users
 * ID: 0019
 */
exports.usersTool_0019 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0019:', error);
    throw error;
  }
};
