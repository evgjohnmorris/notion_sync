/**
 * Generated Tool: usersTool_0797
 * Domain: Users
 * ID: 0797
 */
exports.usersTool_0797 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0797:', error);
    throw error;
  }
};
