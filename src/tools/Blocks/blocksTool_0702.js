/**
 * Generated Tool: blocksTool_0702
 * Domain: Blocks
 * ID: 0702
 */
exports.blocksTool_0702 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0702:', error);
    throw error;
  }
};
