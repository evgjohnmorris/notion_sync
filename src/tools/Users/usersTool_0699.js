/**
 * Generated Tool: usersTool_0699
 * Domain: Users
 * ID: 0699
 */
exports.usersTool_0699 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0699:', error);
    throw error;
  }
};
