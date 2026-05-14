/**
 * Generated Tool: usersTool_0517
 * Domain: Users
 * ID: 0517
 */
exports.usersTool_0517 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0517:', error);
    throw error;
  }
};
