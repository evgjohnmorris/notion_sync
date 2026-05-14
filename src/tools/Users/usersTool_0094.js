/**
 * Generated Tool: usersTool_0094
 * Domain: Users
 * ID: 0094
 */
exports.usersTool_0094 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0094:', error);
    throw error;
  }
};
