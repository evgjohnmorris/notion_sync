/**
 * Generated Tool: usersTool_0449
 * Domain: Users
 * ID: 0449
 */
exports.usersTool_0449 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0449:', error);
    throw error;
  }
};
