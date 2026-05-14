/**
 * Generated Tool: usersTool_0811
 * Domain: Users
 * ID: 0811
 */
exports.usersTool_0811 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0811:', error);
    throw error;
  }
};
