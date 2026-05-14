/**
 * Generated Tool: usersTool_0814
 * Domain: Users
 * ID: 0814
 */
exports.usersTool_0814 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0814:', error);
    throw error;
  }
};
