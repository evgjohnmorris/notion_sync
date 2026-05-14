/**
 * Generated Tool: workspacesTool_0347
 * Domain: Workspaces
 * ID: 0347
 */
exports.workspacesTool_0347 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0347:', error);
    throw error;
  }
};
