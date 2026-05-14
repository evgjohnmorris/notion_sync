/**
 * Generated Tool: usersTool_0435
 * Domain: Users
 * ID: 0435
 */
exports.usersTool_0435 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0435:', error);
    throw error;
  }
};
