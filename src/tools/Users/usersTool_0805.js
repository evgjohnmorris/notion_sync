/**
 * Generated Tool: usersTool_0805
 * Domain: Users
 * ID: 0805
 */
exports.usersTool_0805 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0805:', error);
    throw error;
  }
};
