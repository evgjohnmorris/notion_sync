/**
 * Generated Tool: usersTool_0996
 * Domain: Users
 * ID: 0996
 */
exports.usersTool_0996 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0996:', error);
    throw error;
  }
};
