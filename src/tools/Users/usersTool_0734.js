/**
 * Generated Tool: usersTool_0734
 * Domain: Users
 * ID: 0734
 */
exports.usersTool_0734 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0734:', error);
    throw error;
  }
};
