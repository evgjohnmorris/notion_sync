/**
 * Generated Tool: usersTool_0558
 * Domain: Users
 * ID: 0558
 */
exports.usersTool_0558 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0558:', error);
    throw error;
  }
};
