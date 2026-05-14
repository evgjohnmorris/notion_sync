/**
 * Generated Tool: usersTool_0566
 * Domain: Users
 * ID: 0566
 */
exports.usersTool_0566 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0566:', error);
    throw error;
  }
};
