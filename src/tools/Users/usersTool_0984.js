/**
 * Generated Tool: usersTool_0984
 * Domain: Users
 * ID: 0984
 */
exports.usersTool_0984 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0984:', error);
    throw error;
  }
};
