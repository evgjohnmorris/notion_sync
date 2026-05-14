/**
 * Generated Tool: usersTool_0620
 * Domain: Users
 * ID: 0620
 */
exports.usersTool_0620 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0620:', error);
    throw error;
  }
};
