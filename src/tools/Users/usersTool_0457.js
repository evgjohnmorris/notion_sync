/**
 * Generated Tool: usersTool_0457
 * Domain: Users
 * ID: 0457
 */
exports.usersTool_0457 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0457:', error);
    throw error;
  }
};
