/**
 * Generated Tool: databasesTool_0960
 * Domain: Databases
 * ID: 0960
 */
exports.databasesTool_0960 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0960:', error);
    throw error;
  }
};
