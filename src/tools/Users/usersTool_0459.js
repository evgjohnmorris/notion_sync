/**
 * Generated Tool: usersTool_0459
 * Domain: Users
 * ID: 0459
 */
exports.usersTool_0459 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0459:', error);
    throw error;
  }
};
