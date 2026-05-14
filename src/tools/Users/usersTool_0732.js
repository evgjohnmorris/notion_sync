/**
 * Generated Tool: usersTool_0732
 * Domain: Users
 * ID: 0732
 */
exports.usersTool_0732 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0732:', error);
    throw error;
  }
};
