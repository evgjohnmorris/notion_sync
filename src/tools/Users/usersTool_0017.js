/**
 * Generated Tool: usersTool_0017
 * Domain: Users
 * ID: 0017
 */
exports.usersTool_0017 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0017:', error);
    throw error;
  }
};
