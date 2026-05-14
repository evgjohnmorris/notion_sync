/**
 * Generated Tool: workspacesTool_0221
 * Domain: Workspaces
 * ID: 0221
 */
exports.workspacesTool_0221 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0221:', error);
    throw error;
  }
};
