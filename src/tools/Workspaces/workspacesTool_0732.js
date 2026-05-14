/**
 * Generated Tool: workspacesTool_0732
 * Domain: Workspaces
 * ID: 0732
 */
exports.workspacesTool_0732 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0732:', error);
    throw error;
  }
};
