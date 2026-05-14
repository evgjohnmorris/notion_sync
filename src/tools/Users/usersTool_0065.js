/**
 * Generated Tool: usersTool_0065
 * Domain: Users
 * ID: 0065
 */
exports.usersTool_0065 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0065:', error);
    throw error;
  }
};
