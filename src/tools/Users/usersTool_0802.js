/**
 * Generated Tool: usersTool_0802
 * Domain: Users
 * ID: 0802
 */
exports.usersTool_0802 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0802:', error);
    throw error;
  }
};
