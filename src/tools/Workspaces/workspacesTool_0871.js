/**
 * Generated Tool: workspacesTool_0871
 * Domain: Workspaces
 * ID: 0871
 */
exports.workspacesTool_0871 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0871:', error);
    throw error;
  }
};
