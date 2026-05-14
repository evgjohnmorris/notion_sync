/**
 * Generated Tool: usersTool_0665
 * Domain: Users
 * ID: 0665
 */
exports.usersTool_0665 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0665:', error);
    throw error;
  }
};
