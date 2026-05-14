/**
 * Generated Tool: usersTool_0370
 * Domain: Users
 * ID: 0370
 */
exports.usersTool_0370 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0370:', error);
    throw error;
  }
};
