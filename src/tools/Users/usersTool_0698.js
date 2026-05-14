/**
 * Generated Tool: usersTool_0698
 * Domain: Users
 * ID: 0698
 */
exports.usersTool_0698 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0698:', error);
    throw error;
  }
};
