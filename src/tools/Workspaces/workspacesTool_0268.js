/**
 * Generated Tool: workspacesTool_0268
 * Domain: Workspaces
 * ID: 0268
 */
exports.workspacesTool_0268 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0268:', error);
    throw error;
  }
};
