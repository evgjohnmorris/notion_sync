/**
 * Generated Tool: usersTool_0879
 * Domain: Users
 * ID: 0879
 */
exports.usersTool_0879 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0879:', error);
    throw error;
  }
};
