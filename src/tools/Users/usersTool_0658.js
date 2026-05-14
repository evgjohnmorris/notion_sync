/**
 * Generated Tool: usersTool_0658
 * Domain: Users
 * ID: 0658
 */
exports.usersTool_0658 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0658:', error);
    throw error;
  }
};
