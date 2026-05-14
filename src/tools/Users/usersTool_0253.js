/**
 * Generated Tool: usersTool_0253
 * Domain: Users
 * ID: 0253
 */
exports.usersTool_0253 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0253:', error);
    throw error;
  }
};
