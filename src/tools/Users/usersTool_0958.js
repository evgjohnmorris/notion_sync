/**
 * Generated Tool: usersTool_0958
 * Domain: Users
 * ID: 0958
 */
exports.usersTool_0958 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0958:', error);
    throw error;
  }
};
