/**
 * Generated Tool: usersTool_0512
 * Domain: Users
 * ID: 0512
 */
exports.usersTool_0512 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0512:', error);
    throw error;
  }
};
