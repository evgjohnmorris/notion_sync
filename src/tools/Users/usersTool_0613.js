/**
 * Generated Tool: usersTool_0613
 * Domain: Users
 * ID: 0613
 */
exports.usersTool_0613 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0613:', error);
    throw error;
  }
};
