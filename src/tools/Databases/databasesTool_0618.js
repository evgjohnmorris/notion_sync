/**
 * Generated Tool: databasesTool_0618
 * Domain: Databases
 * ID: 0618
 */
exports.databasesTool_0618 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0618:', error);
    throw error;
  }
};
