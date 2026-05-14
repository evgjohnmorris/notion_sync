/**
 * Generated Tool: blocksTool_0402
 * Domain: Blocks
 * ID: 0402
 */
exports.blocksTool_0402 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0402:', error);
    throw error;
  }
};
