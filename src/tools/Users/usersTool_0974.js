/**
 * Generated Tool: usersTool_0974
 * Domain: Users
 * ID: 0974
 */
exports.usersTool_0974 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0974:', error);
    throw error;
  }
};
