/**
 * Generated Tool: usersTool_0080
 * Domain: Users
 * ID: 0080
 */
exports.usersTool_0080 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0080:', error);
    throw error;
  }
};
