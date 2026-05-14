/**
 * Generated Tool: usersTool_0862
 * Domain: Users
 * ID: 0862
 */
exports.usersTool_0862 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0862:', error);
    throw error;
  }
};
