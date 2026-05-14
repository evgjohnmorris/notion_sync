/**
 * Generated Tool: usersTool_0964
 * Domain: Users
 * ID: 0964
 */
exports.usersTool_0964 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0964:', error);
    throw error;
  }
};
