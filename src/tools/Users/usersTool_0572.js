/**
 * Generated Tool: usersTool_0572
 * Domain: Users
 * ID: 0572
 */
exports.usersTool_0572 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0572:', error);
    throw error;
  }
};
