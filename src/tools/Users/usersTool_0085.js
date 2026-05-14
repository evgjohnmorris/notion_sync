/**
 * Generated Tool: usersTool_0085
 * Domain: Users
 * ID: 0085
 */
exports.usersTool_0085 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0085:', error);
    throw error;
  }
};
