/**
 * Generated Tool: usersTool_0197
 * Domain: Users
 * ID: 0197
 */
exports.usersTool_0197 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0197:', error);
    throw error;
  }
};
