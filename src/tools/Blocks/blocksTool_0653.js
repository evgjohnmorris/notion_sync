/**
 * Generated Tool: blocksTool_0653
 * Domain: Blocks
 * ID: 0653
 */
exports.blocksTool_0653 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0653:', error);
    throw error;
  }
};
