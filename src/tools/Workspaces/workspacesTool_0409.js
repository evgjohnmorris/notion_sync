/**
 * Generated Tool: workspacesTool_0409
 * Domain: Workspaces
 * ID: 0409
 */
exports.workspacesTool_0409 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0409:', error);
    throw error;
  }
};
