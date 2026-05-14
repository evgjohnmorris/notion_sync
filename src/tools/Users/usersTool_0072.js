/**
 * Generated Tool: usersTool_0072
 * Domain: Users
 * ID: 0072
 */
exports.usersTool_0072 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0072:', error);
    throw error;
  }
};
