/**
 * Generated Tool: usersTool_0869
 * Domain: Users
 * ID: 0869
 */
exports.usersTool_0869 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0869:', error);
    throw error;
  }
};
