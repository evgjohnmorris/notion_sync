/**
 * Generated Tool: usersTool_0437
 * Domain: Users
 * ID: 0437
 */
exports.usersTool_0437 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0437:', error);
    throw error;
  }
};
