/**
 * Generated Tool: blocksTool_0330
 * Domain: Blocks
 * ID: 0330
 */
exports.blocksTool_0330 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0330:', error);
    throw error;
  }
};
